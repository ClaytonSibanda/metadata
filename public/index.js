/**
 * Created by Clayza on 2017-07-13.
 */
$(document).ready(()=>{

    $('#fileUpload').submit(()=>{
         $("#status").text("file is uploading...");
        $(this).ajaxSubmit({
            target:'#status',
            url:'/upload',
            type:'post',
            resetForm:true,
            success: (response)=> {
                console.log("This is thee response "+response);},
            error:(xhr)=>{console.log("Error "+xhr.status);}
});

   return false;//prevents default browser upoal config
         });

});