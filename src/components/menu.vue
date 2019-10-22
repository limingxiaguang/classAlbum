<template>
    <Menu active-name="Album" :theme="theme" width="auto" :class="classP" @on-select="clickEvent">
        <MenuItem name="Album">
            <Icon type="ios-book-outline" />
            <span>校园回忆</span>
        </MenuItem>
        <MenuItem name="UserInfo">
            <Icon type="md-contact" />
            <span>个人中心</span>
        </MenuItem>
        <MenuItem name="logOut">
            <Icon type="ios-log-out" />
            <span>退出登录</span>
        </MenuItem>
    </Menu>
</template>
<script>
export default {
    name: "dMenu",
    props: {
        theme: {
            type: String,
            default: 'dark'
        },
        classP:  Array
    },
    methods: {
        clickEvent(name) {
            console.log(name)
            name === "logOut" ? this.handelLogOut() : this.$router.replace(name)
        },
        handelLogOut () {
            localStorage.setItem("Token", "") 
             this.$router.replace('Login')
        }
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