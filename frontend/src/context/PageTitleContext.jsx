import { createContext, useContext, useState } from "react";

const PageTitleCtx = createContext(null);
export const usePageTitle = () => useContext(PageTitleCtx);

export default function PageTitleProvider({ children }) {
    const [title, setTitle] = useState("");
    return (
        <PageTitleCtx.Provider value={{ title, setTitle }}>
            {children}
        </PageTitleCtx.Provider>
    );
}


// This A tiny helper hook you’ll call inside each page:

// src/hooks/useSetTitle.js
// import { useEffect } from "react";
// import { usePageTitle } from "../context/PageTitleContext";
// export default function useSetTitle(t) {
//    const { setTitle } = usePageTitle();
//   useEffect(() => { setTitle(t); }, [t, setTitle]);
//  }