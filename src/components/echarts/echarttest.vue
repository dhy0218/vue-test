<template>
  <div >
      <el-main>
        <el-scrollbar>
            <el-row :gutter="20">
                <el-col :span="12" class="echarts-item">
                    <el-card>
                        <div class="content-title">饼状图示例</div>
                        <ve-pie :data="pieChartData" :settings="pieChartSettings"></ve-pie>
                    </el-card>
                </el-col>
                <el-col :span="12" class="echarts-item">
                    <el-card>
                        <div class="content-title">环形图示例</div>
                        <ve-ring :data="ringChartData" :settings="ringChartSettings"></ve-ring>
                    </el-card>
                </el-col>
                <el-col :span="12" class="echarts-item">
                    <el-card>
                        <div class="content-title">柱状图示例</div>
                        <ve-histogram :data="histogramChartData" :settings="histogramChartSettings"
                                      :mark-line="histogramChartMarkLine"></ve-histogram>
                    </el-card>
                </el-col>
                <el-col :span="12" class="echarts-item">
                    <el-card>
                        <div class="content-title">折线图示例</div>
                        <ve-line :data="lineChartData" :settings="lineChartSettings"
                                 :mark-point="lineChartMarkPoint"></ve-line>
                    </el-card>
                </el-col>
            </el-row>
        </el-scrollbar>
    </el-main>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
      
    return {
        //柱状图设置
                  histogramChartSettings: {
                    metrics: ['日期', '百度', '谷歌', '猎豹', '搜狗', 'QQ', 'Safair'],
                    dimension: ['日期'],
                    stack: {
                        '国内': ['百度', '猎豹', '搜狗', 'QQ'],
                        '国外': ['谷歌', 'Safair']
                    }
                },
                histogramChartMarkLine: {
                    data: [
                        [{type: 'min'}, {type: 'max'}]
                    ]
                },
                //折线图设置
                 lineChartSettings: {
                    metrics: ['保额', '保费'],
                    dimension: ['日期']
                },
                lineChartMarkPoint: {
                    data: [{
                        name: '最大值',
                        type: 'max'
                    }]
                },
                //饼状图设置
               pieChartSettings: {
                    dimension: '保费',
                    metrics: '出单量'
                },
                //环形图设置
               ringChartSettings: {
                    dimension: '保费',
                    metrics: '出单量'
                },
        //柱状图
                histogramChartData: {
                    columns: ['日期', '百度', '谷歌', '猎豹', '搜狗', 'QQ', 'Safair'],
                    rows: [{
                        '日期': '周一', '百度': 320, '谷歌': 120, '猎豹': 220, '搜狗': 150, 'QQ': 862, 'Safair': 620,
                    }, {
                        '日期': '周二', '百度': 332, '谷歌': 132, '猎豹': 182, '搜狗': 232, 'QQ': 1018, 'Safair': 732
                    }, {
                        '日期': '周三', '百度': 301, '谷歌': 101, '猎豹': 191, '搜狗': 201, 'QQ': 964, 'Safair': 701
                    }, {
                        '日期': '周四', '百度': 334, '谷歌': 134, '猎豹': 234, '搜狗': 154, 'QQ': 1026, 'Safair': 734
                    }, {
                        '日期': '周五', '百度': 390, '谷歌': 90, '猎豹': 290, '搜狗': 190, 'QQ': 1679, 'Safair': 1090
                    }, {
                        '日期': '周六', '百度': 330, '谷歌': 230, '猎豹': 330, '搜狗': 330, 'QQ': 1600, 'Safair': 1130
                    }, {
                        '日期': '周日', '百度': 320, '谷歌': 210, '猎豹': 310, '搜狗': 410, 'QQ': 1570, 'Safair': 1120
                    }]
                },
                //折线图
                lineChartData: {
                    columns: ['日期', '保额', '保费', '占比', '其他'],
                    rows: [{
                        '保额': 6200, '日期': '1月1日', '保费': 4788.99, '占比': 0.32, '其他': 100
                    }, {
                        '保额': 3400, '日期': '1月2日', '保费': 3200.00, '占比': 0.35, '其他': 100
                    }, {
                        '保额': 4300, '日期': '1月3日', '保费': 4100.88, '占比': 0.2, '其他': 100
                    }, {
                        '保额': 5000, '日期': '1月4日', '保费': 4888.88, '占比': 0.41, '其他': 100
                    }, {
                        '保额': 7800, '日期': '1月5日', '保费': 2008.99, '占比': 0.52, '其他': 100
                    }, {
                        '保额': 2900, '日期': '1月6日', '保费': 1534, '占比': 0.55, '其他': 100
                    }]
                },
               //饼状图
                pieChartData: {
                    columns: ['日期', '保费', '出单量'],
                    rows: [{
                        '日期': '1/1', '保费': 588.78, '出单量': 10
                    }, {
                        '日期': '1/2', '保费': 249.88, '出单量': 34
                    }, {
                        '日期': '1/3', '保费': 468.78, '出单量': 97
                    }, {
                        '日期': '1/4', '保费': 239.33, '出单量': 48
                    }, {
                        '日期': '1/5', '保费': 900.88, '出单量': 78
                    }, {
                        '日期': '1/6', '保费': 989.88, '出单量': 23
                    }]
                },
               //环形图
                ringChartData: {
                    columns: ['日期', '保费', '出单量'],
                    rows: [{
                        '日期': '1/1', '保费': 588.78, '出单量': 10
                    }, {
                        '日期': '1/2', '保费': 249.88, '出单量': 34
                    }, {
                        '日期': '1/3', '保费': 468.78, '出单量': 97
                    }, {
                        '日期': '1/4', '保费': 239.33, '出单量': 48
                    }, {
                        '日期': '1/5', '保费': 900.88, '出单量': 78
                    }, {
                        '日期': '1/6', '保费': 989.88, '出单量': 23
                    }]
                }
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
     .content-title {
        clear: both;
        font-weight: 400;
        line-height: 50px;
        padding: 10px 10px;
        font-size: 21px;
        color: black;
        border-radius: 1px;
        border: 1px solid #EBEEF5;
    }
</style>