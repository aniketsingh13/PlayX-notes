import {useEffect} from "react";

export const useDocumentTitle = (title) => {
            useEffect(() => {
         document.title = `PlayX-Note | ${title}`
            },[title])
}