<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="菜单名称" :label-width="width">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" :label-width="width">
          <el-select v-model="form.pid" placeholder=" - -  请选择  - - " @change="changePid">
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 动态循环添加数据  菜单分类 -->
            <el-option 
            :label="item.title" 
            :value="item.id" 
            v-for="item in menuList" 
            :key='item.id'
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单类型" :label-width="width">
          <el-radio v-model="form.type" :label="1" disabled>目录</el-radio>
          <el-radio v-model="form.type" :label="2" disabled>菜单</el-radio>
        </el-form-item>
        <el-form-item
          label="菜单图标"
          :label-width="width"
          v-if="form.type == 1"
        >
          <el-select v-model="form.icon" placeholder="请选择活动区域">
            <el-option label="电话簿" value="el-icon-phone-outline">
              <i class="el-icon-phone-outline"></i> __电话簿
            </el-option>
            <el-option label="收藏夹" value="el-icon-star-off">
              <i class="el-icon-star-off"></i> __收藏夹
            </el-option>
            <el-option label="图片" value="el-icon-picture-outline">
              <i class="el-icon-picture-outline"></i> __图片
            </el-option>
            <el-option label="标记" value="el-icon-s-flag">
              <i class="el-icon-s-flag"></i> __标记
            </el-option>
            <el-option label="音乐" value="el-icon-headset">
              <i class="el-icon-headset"></i> __音乐
            </el-option>
            <el-option label="信息" value="el-icon-message">
              <i class="el-icon-message"></i> __信息
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单地址" :label-width="width" v-else>
          <el-select v-model="form.url" placeholder="请选择活动区域">
            <el-option
              v-for="item in indexRouters"
              :key="item.path"
              :label="'/' + item.path"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if='info.isAdd'>添 加</el-button>
        <el-button type="primary" @click='update' v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { indexRouters } from "../../../router/index";
import { reqMenuAdd, reqMenuListOne, reqMenuEdit } from "../../../util/request";
import {mapGetters, mapActions} from 'vuex'
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      menuList: 'menu/list'
    })
  },
  components: {},
  data() {
    return {
      form: {
        pid: '',
        title: "",
        icon: "",
        type: 0,
        url: "",
        status: 1,
      },
      width: "160px",
      // isShow: true,
      indexRouters:indexRouters
    };
  },
  methods: {
    //   取消弹框
    hide() {
      this.info.isShow = false;
    },
    ...mapActions({
      requestMenuList: "menu/requestMenuList",
    }),
   //   添加操作
    add() {
      // console.log(1111);
      reqMenuAdd(this.form).then((res) => {
        this.hide();
        this.requestMenuList();
      });
    },
    // 修改type的状态
    changePid() {
      this.form.type = this.form.pid == 0 ? 1 : 2;
    },
    // 查看一条数据
    look(id){
      reqMenuListOne({id:id}).then(res=>{
        this.form = res.data.list;
        this.form.id = id;
      })
    },
    // 修改
    update(){
      reqMenuEdit(this.form).then((res) => {
        this.hide();
        this.requestMenuList();
        // this.empty();
      }) 
    },
    // 重置
    empty(){
      this.form = {
        pid: '',
        title: "",
        icon: "",
        type: 0,
        url: "",
        status: 1,
      }
    }
  },
  mounted() {
    
  },
};
</script>

<style>
</style>