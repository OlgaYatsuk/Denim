class CLASS_NAME {
	constructor(sSelector){
		this.MAIN_HTML_ELEMENT = $(sSelector);
		this.createEvents();
		}
		
	SAMPLE_METHOD(){ }
	
	createEvents(){
		// this.MAIN_HTML_ELEMENT.find('.some_html_element_class').click(this.SAMPLE_METHOD.bind(this));
		}
	}