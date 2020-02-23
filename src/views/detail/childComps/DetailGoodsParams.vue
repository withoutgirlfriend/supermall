<template>
  <div id="" class="goods-params" v-if="Object.keys(goodsParams).length!==0">
    <div class="explain">{{goodsParams.rule.key}}：</div>
    <table class="rule-table" border="0" cellpadding="0" cellspacing="0">
      <tr v-for="(items, index) in goodsParams.rule.tables[0]" :key="index">
        <td class="rule-td" v-for="(item, index) in items" :key="index">{{item}}</td>
      </tr>
    </table>
    <div class="ps">{{goodsParams.rule.disclaimer}}</div>
    <div class="params">{{goodsParams.info.key}}：</div>
    <table class="params-table" border="0" cellpadding="0" cellspacing="0">
      <tr v-for="(row, index) in goodsParams.info.set" :key="index">
        <td class="params-td-left">{{row.key}}</td>
        <td class="params-td-right">{{row.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailGoodsParams',
  props: {
    goodsParams: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  watch: {
    goodsParams(){
      console.log(this.goodsParams.info)
    }
  }
}
</script>

<style scoped>
  .explain,
  .ps,
  .params {
    margin: 5vw  3.75vw 1.25vw;
  }
  .rule-table,
  .params-table {
    margin: 0 auto;
  }
  .rule-td {
    padding: 3.75vw 5vw;
    border-bottom: 1px solid #ccc;
  }
  
  /* .params-table {
    margin: 0 18px;
  } */

  .params-td-left,
  .params-td-right {
    border-bottom: 1px solid #ccc;
  }

  .params-td-left {
    padding: 3.75vw 5vw;
  }
  
  .params-td-right {
    padding: 3.75vw 11vw;
    color: var(--color-high-text)
  }
</style>