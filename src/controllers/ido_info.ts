import { runQuery } from '../utils';
import { IDOs } from '../constants';

export const fetchIDOStateInfo = async () => {
    const queries = IDOs.map((ido) =>
        runQuery(ido.contract, {
            get_state_info: {},
        }),
    );
    let idoStateInfo: any[] = [];
    await Promise.all(queries).then((queryResults) => {
        idoStateInfo = queryResults.map((item, index: number) => ({
            ...item,
            contractAddress: IDOs[index].contract,
        }));
    });
    return { idoStateInfo };
};

export const fetchIDOSaleInfo = async () => {
    const queries = IDOs.map((ido) =>
        runQuery(ido.contract, {
            get_sale_info: {},
        }),
    );
    let idoSaleInfo: any[] = [];
    await Promise.all(queries).then((queryResults) => {
        idoSaleInfo = queryResults.map((item, index: number) => ({
            ...item,
            contractAddress: IDOs[index].contract,
        }));
    });
    return { idoSaleInfo };
};
