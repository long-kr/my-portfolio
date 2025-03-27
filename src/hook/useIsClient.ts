import { useEffect, useState } from "react";

export const useIsClient = (): boolean => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (!isClient) setIsClient(true);
    }, [isClient])


    return isClient;
}
