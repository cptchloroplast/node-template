declare module Express {
    interface Request {
        token: string,
        decodedToken: any
    }
}
