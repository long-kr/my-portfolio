# My Portfolio - AI Assistant Instructions

## Project Overview

This is a Next.js portfolio website using the App Router architecture with a strong focus on performance optimization through code splitting and lazy loading. The project is TypeScript-based with strict type checking.

## Core Architecture Patterns

### Component Organization

- UI components: `src/components/ui/` - Reusable atomic components
- Section components: `src/components/section/` - Page sections dynamically imported
- Layout components: `src/components/layout/` - Page structure components
- Container components: `src/components/container/` - Wrapper components for layouts

### Performance Optimization

```tsx
// Example: Dynamic imports with loading states (src/app/page.tsx)
const AboutSection = dynamic(
  () => import("@/components/section/AboutSection"),
  {
    loading: () => (
      <div className="flex min-h-[50vh] items-center justify-center">
        Loading about section...
      </div>
    ),
  },
);
```

### Server vs Client Components

- Default to Server Components (RSC)
- Use `'use client'` when component requires:
  - Browser APIs
  - Event listeners
  - React hooks
  - Client-side state

Example from `src/app/page.tsx`:

```tsx
// Server Component with dynamic imports for code splitting
const AboutSection = dynamic(
  () => import("@/components/section/AboutSection"),
  {
    loading: () => <div>Loading about section...</div>,
  },
);
```

### API Architecture

- Rate limiting on sensitive routes using PostgreSQL store
- Standardized response patterns:

```typescript
// Success/Error response helpers (src/lib/responses.ts)
export function SuccessResponse<T>(data: T) {
  return NextResponse.json({ success: true, data });
}

export function ErrorResponse(error: string) {
  return NextResponse.json({ success: false, error });
}
```

## Development Workflow

### Setup

```bash
npm install    # Install dependencies
npm run dev    # Start development server
```

## Code Style Requirements

### TypeScript Usage

- Strict typing required - no `any`
- Use TypeScript's built-in types or create custom types in relevant feature folders
- Example type pattern:

```typescript
type Project = {
  name: string;
  url: string;
  image: string | StaticImageData;
  github?: string;
  type: string;
  description: string;
  technologies: IconKeys[];
};
```

### Component Patterns

- Use PascalCase for component files: `Button.tsx`, not `button.tsx`
- Prefer named exports
- Keep components focused and under 20 lines where possible
- Use Tailwind CSS for styling

### State Management

- Use React Context for global state
- Prefer prop drilling for shallow component trees
- Use React Hook Form for form state

### Function Patterns

- Use arrow functions for simple operations (<3 lines)
- Use named functions for complex logic
- Implement early returns
- Use RO-RO (Receive Object, Return Object) pattern for complex parameters

### Data Handling

- Use Zod for validation
- Prefer immutable data structures
- Use `readonly` for immutable properties
- Define constants for magic numbers

## Testing

- Jest + React Testing Library
- Test files co-located with implementation in `__tests__/`
- Example test pattern:

```typescript
import { render, screen } from '@testing-library/react';

describe('Component', () => {
  it('should render correctly', () => {
    render(<Component />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

## Common Operations

### Adding New Components

1. Create file in appropriate `src/components/` subdirectory
2. Use PascalCase for filename
3. Export named component
4. Include TypeScript types
5. Add Tailwind CSS styles

### API Route Creation

1. Create route in `src/app/api/`
2. Use rate limiting wrapper if needed
3. Implement proper error handling
4. Return standardized response objects
