const Producer = require('../models/Producer');

exports.getAllProducers = async ({page=1,limit=10}) => {
  const skip=(page-1)*limit
  return await Producer.find({active:true})
  // .skip(skip).limit(parseInt(limit));
};

exports.createProducer = async (data) => {
  const producer = new Producer(data);
  return await producer.save();
};

exports.updateProducer = async (id,data)=>{
  return await Producer.findByIdAndUpdate(id,data,{new :true})
}

exports.deleteProducer = async (id)=>{
  return await Producer.findByIdAndDelete(id,{active:false},{new:true})
}