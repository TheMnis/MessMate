import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart,FaRegHeart,FaStar,FaFire,FaArrowRight,FaClock } from "react-icons/fa";

function MealCard({ meal }) {
const [favorite,setFavorite]=useState(false);
return (
<motion.div whileHover={{y:-8}} transition={{duration:.25}} className="relative overflow-hidden rounded-3xl p-6" style={{background:"var(--color-surface)",border:"1px solid var(--color-border)",boxShadow:"0 18px 40px rgba(15,23,42,.08)"}}>
<div style={{position:"absolute",top:-60,right:-60,width:180,height:180,borderRadius:"999px",background:"linear-gradient(135deg,var(--color-primary),var(--color-secondary))",opacity:.08}}/>
<div className="relative flex justify-between items-start">
<div className="flex items-center gap-4">
<div style={{width:64,height:64,borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,background:"linear-gradient(135deg,var(--color-primary),var(--color-secondary))",color:"#fff"}}>{meal.icon}</div>
<div><h2 className="text-2xl font-bold">{meal.meal}</h2><div className="flex items-center gap-2 mt-2" style={{color:"var(--color-text-muted)"}}><FaClock/><span>{meal.time}</span></div></div></div>
<button onClick={()=>setFavorite(!favorite)} style={{width:48,height:48,borderRadius:"999px",background:"var(--color-background)"}}>{favorite?<FaHeart color="var(--color-danger)"/>:<FaRegHeart color="var(--color-text-muted)"/>}</button>
</div>
<div className="mt-6 flex gap-3 flex-wrap">
<span className="px-4 py-2 rounded-full text-sm font-semibold" style={{background:meal.available?"var(--color-success-subtle)":"var(--color-danger-subtle)",color:meal.available?"var(--color-success)":"var(--color-danger)"}}>{meal.available?"Available":"Closed"}</span>
<span className="px-4 py-2 rounded-full text-sm font-semibold" style={{background:"var(--color-primary-subtle)",color:"var(--color-primary)"}}>{meal.type}</span>
</div>
<div className="mt-7"><h3 className="font-semibold text-lg mb-4">Today's Items</h3><div className="space-y-3">{meal.items.map(item=><div key={item} className="flex items-center gap-3"><div style={{width:24,height:24,borderRadius:"999px",background:"var(--color-success-subtle)",color:"var(--color-success)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>✓</div><span style={{color:"var(--color-text-secondary)"}}>{item}</span></div>)}</div></div>
<div className="mt-8 pt-5 flex items-center justify-between" style={{borderTop:"1px solid var(--color-border)"}}>
<div className="flex gap-3 flex-wrap">
<div className="px-4 py-2 rounded-full flex items-center gap-2" style={{background:"var(--color-warning-subtle)"}}><FaFire/>{meal.calories} kcal</div>
<div className="px-4 py-2 rounded-full flex items-center gap-2" style={{background:"var(--color-primary-subtle)"}}><FaStar/>{meal.rating}</div>
</div>
<button className="font-semibold flex items-center gap-2" style={{color:"var(--color-primary)"}}>View <FaArrowRight/></button>
</div>
</motion.div>);
}
export default MealCard;