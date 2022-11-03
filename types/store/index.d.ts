import { TypedUseSelectorHook } from "react-redux";
export declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    shoppingCart: import("./featuresSlice/shopCartSlice").IshopCartStateTypes;
}>, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    shoppingCart: import("./featuresSlice/shopCartSlice").IshopCartStateTypes;
}>, import("redux").AnyAction, undefined>, import("@reduxjs/toolkit").ListenerMiddleware<unknown, import("@reduxjs/toolkit").ThunkDispatch<unknown, unknown, import("redux").AnyAction>, unknown>]>>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<import("redux").CombinedState<{
    shoppingCart: import("./featuresSlice/shopCartSlice").IshopCartStateTypes;
}>, undefined, import("redux").AnyAction> & ((action: import("redux").Action<"listenerMiddleware/add">) => import("@reduxjs/toolkit").UnsubscribeListener) & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
