
const ociReducer = (state = [data], action) => {
  switch(action.type) {
    case 'ADD_DATA':
      return [...state, action.data]
    default:
      return state
  }
}

const data = {
        "type": "showoci",
        "data": {
            "program": "showoci.py",
            "author": "Adi Zohar",
            "config_file": "~/.oci/config",
            "config_profile": "DEFAULT",
            "use_instance_principals": false,
            "version": "20.2.11",
            "override_tenant_id": "",
            "datetime": "2020-02-18 16:16:14",
            "cmdline": "-a -cp Apple_Computer -jf Apple_Compartment_All_Resources",
            "oci_sdk_version": "2.10.4"
        }
    }

export default ociReducer
