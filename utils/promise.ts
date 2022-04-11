export const delayedPromise = async <T>(promise: Promise<T>, time: number): Promise<T> => {
    const delay = new Promise<null>((resolve) => {
        const timeoutId = setTimeout(() => {
            resolve(null)
            clearTimeout(timeoutId)
        }, time)
    })

    await Promise.all([promise, delay]);
    return promise;
}