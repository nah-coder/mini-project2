import * as types from '../constants/actionType';

// action cho chức năng hiển thị sản phẩm
export const act_list_product=()=>{{
    return{
        types:types.LIST_PRODUCT
    }
}}

// action cho chức năng mua hàng(nhấn vào nút mua hàng)
export const act_buy_item=(product,quantity)=>{{
    return{
        types:types.BUY_ITEM,
        product,
        quantity
    }
}}

// action cho chức năng cập nhật giỏ hàng
export const act_update_item=(product,quantity)=>{{
    return{
        types:types.UPDATE_ITEM,
        product,
        quantity
    }
}}

// action cho chức năng xóa sản phẩm giỏ hàng
export const act_remove_item=(product)=>{{
    return{
        types:types.REMOVE_ITEM,
        product,
    }
}}

// action cho chức năng thay đổi thông báo
export const act_change_notify=(message)=>{{
    return{
        types:types.CHANGE_NOTIFY,
        message,
    }
}}
