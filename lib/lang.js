

export default {
  langFilter() {
    let cnWhere =  {
      filed : "data",
      type : "and",
      filters : [
        {
          type : "or",
          filter : [
            [ "lang", "=" , 'chinese' ],
            [ "lang", "isnull" ],
          ]
        }]
    }

    let enWhere =  {
      filed : "data",
      type : "and",
      filters : [
        {
          type : "or",
          filter : [
            [ "lang", "=" , 'english' ]
          ]
        }]
    }

    return 'en' != this.$i18n.locale ? cnWhere : enWhere
  }
}
