class Snow {
	
  constructor(x, y, img)
	{
		var options = {
			'restitution':0.8,
			'friction':1.0,
			'density':20,
		}
		this.x = x;
		this.y =y;
		this.img = img
	};
		
	                  
	
	
	display()
	{
		
	imageMode(CENTER);
	image(this.img, this.x,this.y,100,100);
	
			
	}

	fall()
	{
	//change y pos
	this.y = this.y + 1;	
			
			
	}
	
}
