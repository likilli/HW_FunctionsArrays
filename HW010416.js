

Array.prototype.slice = function(start, end)
{	
	var arr = []

	length = (length < 0)? 0 : this.length
	start = (start >0)? start : start+this.length
	end =(typeof end != 'underfind')? end : this.length
	end = (end >0)? end : this.length+end 	

	for (var i = start ; i <= end; i++)
	{
			if(i in this)
			arr.push(this[i])
	}
	if (arr.length > 0) {
		console.log('it works')
		return arr
	}
	console.log('not work')
	return arr
}


///////////////////////////////


Array.prototype.indexOf = function(searchElement, index=0)
{
	if (index >= this.length)
		return -1
	for (var i = index; i < this.length; i++) 
	{
		if(this[i] === searchElement)
			return i
	}
}

//////////////////////////////
Array.prototype.lastIndexOf = function(searchElement, index=0)
{
	var v = searchElement 
	var arr =[]//if (index <= this.length)
	//	return -1
	for (var i = this.length; i > 0; i--) 
	{
		if(this[i] === searchElement)
			
		
	return i
	}	
}
//////////////////////////////
String.prototype.slice = function(beginSlice, endSlice=0)
{
	beginSlice -= 0
	endSlice -=0
	var str = ""

	if (beginSlice < 0)
		beginSlice = this.length + beginSlice

	if(endSlice < 0)
		endSlice = this.length - endSlice

	if(endSlice == 0)
		endSlice = this.length

	for (var i = beginSlice; i < endSlice; i++) 
	{
		str += this[i]
	}
	return str
}