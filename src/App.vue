
<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    style="height: 30px; background-color:#DCDFE6 ;"
    router
    >
    <el-menu-item index="/">HOME</el-menu-item>    
        <div class="flex-grow center" style="height: 100%;">
        <el-row align="middle">
          <el-col :span="2"  align="middle" >
            <el-avatar :size="18" :src="circleUrl" class="test-main" style="bottom: -3px;" />
            
          </el-col>
          <el-col :span="22" style="color:#606266;" >
            {{msg}}
            
          </el-col>
          
        </el-row>
        </div>
        <el-menu-item class=" p-L-10" index="/login">LOGIN </el-menu-item>
        <el-menu-item class=" p-L-10" index="/signup">SIGNUP</el-menu-item>
    </el-menu>
  
    
      <Transition  appear>
        <RouterView />
      </Transition>  
      
  
</template>

<script>


export default{
  data(){
    return{
      msg:"未登陆"
    }
  },
  components:{
    
  }
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.trans{
  position: relative;
  transform: translateY(20%);
}
</style>