//factory function....sometimes we need many object but their property name & value are same.so why not we create a factrory function and use it in need.by this way we can data or code duplication.

function mobile(){

    return{
    
    model:'galaxy'
    
    }
    
    
    
    
    }
    
    var samsung=mobile()
    var lg=mobile()
    
    console.log(samsung,lg)