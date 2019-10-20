<template>
    <Menu active-name="1-2" :theme="theme" width="auto" :class="classP">
        <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
        </MenuItem>
        <MenuItem name="1-2">
            <Icon type="ios-search"></Icon>
            <span>Option 2</span>
        </MenuItem>
        <MenuItem name="1-3">
            <Icon type="ios-settings"></Icon>
            <span>Option 3</span>
        </MenuItem>
    </Menu>
</template>
<script>
import { type } from 'os';
export default {
    name: "dMenu",
    props: {
        theme: {
            type: String,
            default: 'dark'
        },
        classP:  Array
    }
}
</script>
<style lang="less">
.menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>