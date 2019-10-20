<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <d-menu :theme="theme" :classP="menuitemClasses" :isCollapsed="isCollapsed"/>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view />
                </Content>
            <Footer class="layout-footer-center">2019-2050 &copy; LiMingXiaGuang</Footer>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import dMenu from '_c/menu.vue'
    export default {
      components: {
        dMenu
      },
        data () {
            return {
                theme: 'dark',
                isCollapsed: false
            }
        },
    computed: {
        rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
        menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
    },
    methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
        
    }
</script>
<style scoped>
    .layout{
        width: 100%;
        height: 100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .ivu-layout-has-sider {
      height: 100%;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    
    .layout-footer-center {
      text-align: center;
    }
</style>