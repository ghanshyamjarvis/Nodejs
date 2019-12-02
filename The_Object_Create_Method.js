var roles = { type: "Admin",
              displayType : function() {console.log(this.type);}
            }
var super_role = Object.create(roles);
super_role.displayType();

var guest_role = Object.create(roles);
guest_role.type = "Guest";
guest_role.displayType();