"use client";

import { useEffect, useState } from "react";

export const useIsClient = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (!isClient) setIsClient(true);
    }, [isClient])

    return isClient;
}
