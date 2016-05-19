app
    .controller('StoreController', function(Gems) {
    	this.products = Gems; 	  
    })
    .controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab
		};
		this.isSelected = function(isSelectedTab) {
			return this.tab === isSelectedTab
		};

    })
    .controller('GalleryController', function() {
    	this.current = 0;
    	this.setCurrent = function(newValue) {
      		this.current = newValue ? newValue : 0;  
    	};
  })