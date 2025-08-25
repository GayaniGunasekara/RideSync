import { useEffect } from "react";
import { usePageTitle } from "../context/PageTitleContext";

export default function useSetTitle(t) {
    const { setTitle } = usePageTitle();
    useEffect(() => {
        setTitle(t);
    }, [t, setTitle]);
}
