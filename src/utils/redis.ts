export const parsRedisResult = (result: {
    [x: string]: string;
}): Record<string, any> =>
    Object.keys(result || {}).reduce((parsed, key) => {
        const valueStr = result[key];
        return valueStr ? { ...parsed, [key]: JSON.parse(valueStr) } : parsed;
    }, {});
