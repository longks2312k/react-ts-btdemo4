import React, { createContext, ReactNode, useState } from "react";

interface ThemeContextProps{
    children: ReactNode
}

interface ThemeContextDefault {
    bgrColor: string 
    textColor: string 
    itemColor: string
    toggleTheme: (bgrColor: string, textColor: string, itemColor: string) => void
}

const themeContextDefaultData = {
    bgrColor: '#f4f4f7' as string, 
    textColor: '#121212' as string,
    itemColor: 'white' as string,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextDefault>(themeContextDefaultData);

const ThemeContextProvider = ({children}:ThemeContextProps) => {
    const [bgrColor, setBgrColor] = useState<string>(themeContextDefaultData.bgrColor)
    const [textColor, setTextColor] = useState<string>(themeContextDefaultData.textColor)
    const [itemColor, setItemColor] = useState<string>(themeContextDefaultData.itemColor)

    const toggleTheme = (bgrColor: string, textColor: string, itemColor: string) =>{
        setBgrColor(bgrColor)
        setTextColor(textColor)
        setItemColor(itemColor)
    }

    const themeContextDynamicData = {bgrColor, textColor, itemColor, toggleTheme}

    return <ThemeContext.Provider value={ themeContextDynamicData }>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider