import Root from "@/root";
import { RouteUris } from "./config";
import Page1 from "@/page1";
import Page2 from "@/page2";

export const routes = [
    {
        path: RouteUris.Root,
        element: Root,
        children: [
            {
                path: RouteUris.Page1,
                element: Page1,
                exact: true,
            },
            {
                path: RouteUris.Page2,
                element: Page2,
                exact: true,
            },
        ],
    },
]
