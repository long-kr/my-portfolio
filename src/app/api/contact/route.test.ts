/**
 * @jest-environment node
 */

import { POST } from './route';
import { NextRequest } from 'next/server';
import { sendEmailHandler } from './service';

// Mock the email service
jest.mock('./service', () => ({
  sendEmailHandler: jest.fn().mockResolvedValue(undefined),
}));

// Mock the response utilities
jest.mock('@/lib', () => ({
  SuccessResponse: jest.fn().mockImplementation((data) => ({
    status: 200,
    json: () => Promise.resolve({ success: true, data }),
  })),
  ErrorResponse: jest.fn().mockImplementation((error) => ({
    status: 500,
    json: () => Promise.resolve({ success: false, error }),
  })),
}));

describe('Contact API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns success response when email is sent successfully', async () => {
    // Create a mock request
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message',
      }),
    });

    // Call the API handler
    const response = await POST(request);
    const data = await response.json();

    // Verify the response
    expect(response.status).toBe(200);
    expect(data).toEqual({
      success: true,
      data: {
        message: 'Email sent successfully',
      },
    });

    // Verify the email service was called with correct parameters
    expect(sendEmailHandler).toHaveBeenCalledWith({
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message',
    });
  });

  it('returns error response when email service fails', async () => {
    // Mock the sendEmailHandler to throw an error
    (sendEmailHandler as jest.Mock).mockRejectedValueOnce(new Error('Failed to send email'));

    // Create a mock request
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message',
      }),
    });

    // Call the API handler
    const response = await POST(request);
    const data = await response.json();

    // Verify the response
    expect(response.status).toBe(500);
    expect(data).toEqual({
      success: false,
      error: 'Failed to send email',
    });

    // Verify the email service was called
    expect(sendEmailHandler).toHaveBeenCalled();
  });
});
