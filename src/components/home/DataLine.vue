<template>
  <div class="data-list">
    <div class="data-header">
      <div class="data-item">
        <Select />
      </div>
      <div class="data-item">
        <Select />
      </div>
    </div>
    <div class="data-body">
      <Table :columns="columns" :data="data" />
    </div>
    <div class="data-footer">
      <div class="footer-item">
        <div class="icon max"></div>
        <div class="text">年度最高客流日:</div>
        <div class="value">2021-5-1</div>
      </div>
      <div class="footer-item">
        <div class="icon min"></div>
        <div class="text">年度最高客流日:</div>
        <div class="value min">2021-4-1</div>
      </div>
    </div>
  </div>
</template>
<script>
import Select from "@components/Select.vue";
import Table from "@components/scroll-table/TableEle.vue";
import { rem } from "@/utils";
import { useDataConfig } from "@/hooks/dataConfig";

export default {
  setup() {
    const companies = useDataConfig(rem);
    return {
      data: companies.dataLines,
      columns: companies.dataColumns,
    };
  },
  components: {
    Select,
    Table,
  },
};
</script>

<style lang="scss">
.data-list {
  padding: 9px 8px 20px 8px;
  .data-header {
    display: flex;
    justify-content: space-between;
    .data-item {
      width: 216px;
    }
  }
  .data-body {
    height: 177px;
    padding-top: 12px;
  }
  .data-footer {
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    .footer-item {
      //   width: 200px;
      display: flex;
      align-items: center;
      .icon {
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 10px;
        height: 12px;
        &.min {
          background-image: url(../../assets/img/min.png);
        }
        &.max {
          background-image: url(../../assets/img/max.png);
        }
      }
      .text {
        color: #9ebfcb;
        font-size: 13px;
        padding: 0 13px 0 4px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .value {
        font-size: 15px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        color: #66fad5;
        &.min {
          color: #f05b49;
        }
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>