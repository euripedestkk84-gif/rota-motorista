export class RideSimulation{
 constructor({onArrival=()=>{},onChange=()=>{},onFinish=()=>{},schedule=(fn,ms)=>setTimeout(fn,ms),cancel=id=>clearTimeout(id)}={}){Object.assign(this,{onArrival,onChange,onFinish,schedule,cancel});this.queue=[];this.active=null;this.phase=null;this.timers=[];this.connected=false;this.generation=0;}
 connect(rides){this.disconnect();this.connected=true;const generation=this.generation;this.timers=rides.slice(0,2).map((ride,i)=>this.schedule(()=>{if(!this.connected||this.generation!==generation)return;this.queue.push(ride);this.onArrival(ride);this.onChange();},[2000,4000][i]));}
 disconnect(){this.generation++;this.timers.forEach(this.cancel);this.timers=[];this.connected=false;this.queue=[];this.active=null;this.phase=null;this.onChange();}
 accept(){if(this.active||!this.queue.length)return;this.active=this.queue.shift();this.phase='pickup';this.onChange();}
 arrive(){if(!this.active||this.phase!=='pickup')return;this.phase='waiting';this.onChange();}
 begin(){if(!this.active||this.phase!=='waiting')return;this.phase='driving';this.onChange();}
 reject(){if(this.active){this.active=null;this.phase=null;}else this.queue.shift();this.onChange();}
 finish(){if(!this.active||this.phase!=='driving')return;const done=this.active;this.active=null;this.phase=null;this.onFinish(done);this.onChange();}
}
