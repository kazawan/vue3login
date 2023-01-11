
<template>
  
    <el-row  style="height: 80vh;" align="middle">
      <el-col :span="6" >
        
      </el-col>
      
      
      <el-col  :span="12" style="text-align: -webkit-center"  >
        
          <h1 class="text-main ma-b-4"  >LOGIN</h1>
        
  
        
        <el-input class="text-main ma-b-4" v-model="username" placeholder="Please username" />
        <el-input class="text-main ma-b-4" v-model="password" placeholder="Please password"  show-password />
        <el-button class="ma-b-4" type="primary" style="width: 100%;"><p class="text-button-withe" style="width: 100%;">SING IN</p></el-button>
        
        
      </el-col>
      
      <el-col :span="6" >
        
      </el-col>
    </el-row>
    
 
    
  
  </template>
  
  
  <script >
    export default{
      data(){
        return {
          username:'',
          password:'',
        }
      }
    }
  </script>
  
  <style>
  
  </style>