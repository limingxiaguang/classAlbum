<template>
    <div class="outer">
        <div class="NotFound">
            对不起，该页不在你的大学回忆册中<br/>
            <Button class="button" to='/' type="primary" size="large" replace>返回大学记忆册</Button>
        </div> 
    
    </div>
</template>
<script>
export default {
    methods: {
        handelClick() {
            this.$router.push("/")
        }
    }
}
</script>
<style lang="less">

#app {
    height: 100%;
}
.outer {
    width: 100%;
    height: 100%;
    background: #eee;
    z-index: 999;
        & .NotFound {
        padding: 60px auto;
        width: auto;
        height: 200px;
        font-size: 50px;
        line-height: 200px;
        text-align: center;
        z-index: 998;
    }
    
}
</style>