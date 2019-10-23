<template>
<div>
    <Row type="flex" justify="center">
        <Col span="8">
            <a @click.prevent="linkTo('1')">
                <Card style="width:320px">
                <div style="text-align:center">
                    <img src="../assets/img/hh.jpg">
                    <h3>A high quality UI Toolkit based on Vue.js</h3>
                </div>
            </Card>
            </a>
        </Col>
        <Col span="8">
            <a @click.prevent="linkTo('2')">
                <Card style="width:320px">
                <div style="text-align:center">
                    <img src="../assets/img/hh.jpg">
                    <h3>A high quality UI Toolkit based on Vue.js</h3>
                </div>
            </Card>
            </a>
        </Col>
    </Row>
    <Row type="flex" justify="center">
        <Col span="8">
            <a @click.prevent="linkTo('3')">
                <Card style="width:320px">
                <div style="text-align:center">
                    <img src="../assets/img/hh.jpg">
                    <h3>A high quality UI Toolkit based on Vue.js</h3>
                </div>
            </Card>
            </a>
        </Col>
        <Col span="8">
            <a @click.prevent="linkTo('4')">
                <Card style="width:320px">
                <div style="text-align:center">
                    <img src="../assets/img/hh.jpg">
                    <h3>A high quality UI Toolkit based on Vue.js</h3>
                </div>
            </Card>
            </a>
        </Col>
    </Row>
</div>
</template>

<script>
export default {
    name: "photoList",
    methods: {
        linkTo(index) {
            console.log(index)
        }
    }
}
</script>

<style lang="less">
.ivu-card-body img {
    display: block;
    width: 100%;
    height: 100%;
}
.ivu-row-flex-center {
    margin: 2vw 0;
}
</style>