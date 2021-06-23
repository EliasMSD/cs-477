Array.prototype.even=function(){
	
	let result=[]
	for(let i=0;i<this.length;i++){
		
		if(this[i]%2===0){
			result.push(this[i])
		}
	}return result
}
let arr3=[2,3,4,5,6,8,100,24,0]
let evenNum=arr3.even()
console.log(evenNum)


Array.prototype.odd=function(){
	
	let oddNums=[]
	for(let i=0;i<this.length;i++){
		
		if(this[i]%2!==0){
			oddNums.push(this[i])
		}
	}return oddNums
}
let arr1=[2,3,4,5,6,8,100,24,0]
let oddFiltered=arr1.odd()
console.log(oddFiltered)

