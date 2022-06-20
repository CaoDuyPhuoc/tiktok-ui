import * as request from '../../../../utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('user/search', {
            param: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
