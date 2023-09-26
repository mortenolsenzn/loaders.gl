"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6625],{79057:(t,e,n)=>{n.d(e,{Z:()=>s});const s={EPSILON1:.1,EPSILON2:.01,EPSILON3:.001,EPSILON4:1e-4,EPSILON5:1e-5,EPSILON6:1e-6,EPSILON7:1e-7,EPSILON8:1e-8,EPSILON9:1e-9,EPSILON10:1e-10,EPSILON11:1e-11,EPSILON12:1e-12,EPSILON13:1e-13,EPSILON14:1e-14,EPSILON15:1e-15,EPSILON16:1e-16,EPSILON17:1e-17,EPSILON18:1e-18,EPSILON19:1e-19,EPSILON20:1e-20,PI_OVER_TWO:Math.PI/2,PI_OVER_FOUR:Math.PI/4,PI_OVER_SIX:Math.PI/6,TWO_PI:2*Math.PI}},36625:(t,e,n)=>{n.d(e,{Xx:()=>u,KM:()=>f,Mh:()=>K,F7:()=>L,JO:()=>V,tF:()=>et,du:()=>Mt});const s=-1,a=0,r=1;var o=n(81180),i=n(43855);const c=new i.Z,h=new i.Z;class u{constructor(t=[0,0,0],e=[0,0,0],n){(0,o.Z)(this,"center",void 0),(0,o.Z)(this,"halfDiagonal",void 0),(0,o.Z)(this,"minimum",void 0),(0,o.Z)(this,"maximum",void 0),n=n||c.copy(t).add(e).scale(.5),this.center=new i.Z(n),this.halfDiagonal=new i.Z(e).subtract(this.center),this.minimum=new i.Z(t),this.maximum=new i.Z(e)}clone(){return new u(this.minimum,this.maximum,this.center)}equals(t){return this===t||Boolean(t)&&this.minimum.equals(t.minimum)&&this.maximum.equals(t.maximum)}transform(t){return this.center.transformAsPoint(t),this.halfDiagonal.transform(t),this.minimum.transform(t),this.maximum.transform(t),this}intersectPlane(t){const{halfDiagonal:e}=this,n=h.from(t.normal),o=e.x*Math.abs(n.x)+e.y*Math.abs(n.y)+e.z*Math.abs(n.z),i=this.center.dot(n)+t.distance;return i-o>0?r:i+o<0?s:a}distanceTo(t){return Math.sqrt(this.distanceSquaredTo(t))}distanceSquaredTo(t){const e=c.from(t).subtract(this.center),{halfDiagonal:n}=this;let s,a=0;return s=Math.abs(e.x)-n.x,s>0&&(a+=s*s),s=Math.abs(e.y)-n.y,s>0&&(a+=s*s),s=Math.abs(e.z)-n.z,s>0&&(a+=s*s),a}}var l=n(85975);const m=new i.Z,d=new i.Z;class f{constructor(t=[0,0,0],e=0){(0,o.Z)(this,"center",void 0),(0,o.Z)(this,"radius",void 0),this.radius=-0,this.center=new i.Z,this.fromCenterRadius(t,e)}fromCenterRadius(t,e){return this.center.from(t),this.radius=e,this}fromCornerPoints(t,e){return e=m.from(e),this.center=(new i.Z).from(t).add(e).scale(.5),this.radius=this.center.distance(e),this}equals(t){return this===t||Boolean(t)&&this.center.equals(t.center)&&this.radius===t.radius}clone(){return new f(this.center,this.radius)}union(t){const e=this.center,n=this.radius,s=t.center,a=t.radius,r=m.copy(s).subtract(e),o=r.magnitude();if(n>=o+a)return this.clone();if(a>=o+n)return t.clone();const i=.5*(n+o+a);return d.copy(r).scale((-n+i)/o).add(e),this.center.copy(d),this.radius=i,this}expand(t){const e=m.from(t).subtract(this.center).magnitude();return e>this.radius&&(this.radius=e),this}transform(t){this.center.transform(t);const e=l.Q$(m,t);return this.radius=Math.max(e[0],Math.max(e[1],e[2]))*this.radius,this}distanceSquaredTo(t){const e=this.distanceTo(t);return e*e}distanceTo(t){const e=m.from(t).subtract(this.center);return Math.max(0,e.len()-this.radius)}intersectPlane(t){const e=this.center,n=this.radius,o=t.normal.dot(e)+t.distance;return o<-n?s:o<n?a:r}}var y=n(80540),Z=n(79108);const w=new i.Z,p=new i.Z,x=new i.Z,M=new i.Z,g=new i.Z,b=new i.Z,I=new i.Z,S=0,E=1,P=2,A=3,N=4,O=5,z=6,q=7,C=8;class L{constructor(t=[0,0,0],e=[0,0,0,0,0,0,0,0,0]){(0,o.Z)(this,"center",void 0),(0,o.Z)(this,"halfAxes",void 0),this.center=(new i.Z).from(t),this.halfAxes=new y.Z(e)}get halfSize(){const t=this.halfAxes.getColumn(0),e=this.halfAxes.getColumn(1),n=this.halfAxes.getColumn(2);return[new i.Z(t).len(),new i.Z(e).len(),new i.Z(n).len()]}get quaternion(){const t=this.halfAxes.getColumn(0),e=this.halfAxes.getColumn(1),n=this.halfAxes.getColumn(2),s=new i.Z(t).normalize(),a=new i.Z(e).normalize(),r=new i.Z(n).normalize();return(new Z.Z).fromMatrix3(new y.Z([...s,...a,...r]))}fromCenterHalfSizeQuaternion(t,e,n){const s=new Z.Z(n),a=(new y.Z).fromQuaternion(s);return a[0]=a[0]*e[0],a[1]=a[1]*e[0],a[2]=a[2]*e[0],a[3]=a[3]*e[1],a[4]=a[4]*e[1],a[5]=a[5]*e[1],a[6]=a[6]*e[2],a[7]=a[7]*e[2],a[8]=a[8]*e[2],this.center=(new i.Z).from(t),this.halfAxes=a,this}clone(){return new L(this.center,this.halfAxes)}equals(t){return this===t||Boolean(t)&&this.center.equals(t.center)&&this.halfAxes.equals(t.halfAxes)}getBoundingSphere(t=new f){const e=this.halfAxes,n=e.getColumn(0,x),s=e.getColumn(1,M),a=e.getColumn(2,g),r=w.copy(n).add(s).add(a);return t.center.copy(this.center),t.radius=r.magnitude(),t}intersectPlane(t){const e=this.center,n=t.normal,o=this.halfAxes,i=n.x,c=n.y,h=n.z,u=Math.abs(i*o[S]+c*o[E]+h*o[P])+Math.abs(i*o[A]+c*o[N]+h*o[O])+Math.abs(i*o[z]+c*o[q]+h*o[C]),l=n.dot(e)+t.distance;return l<=-u?s:l>=u?r:a}distanceTo(t){return Math.sqrt(this.distanceSquaredTo(t))}distanceSquaredTo(t){const e=p.from(t).subtract(this.center),n=this.halfAxes,s=n.getColumn(0,x),a=n.getColumn(1,M),r=n.getColumn(2,g),o=s.magnitude(),i=a.magnitude(),c=r.magnitude();s.normalize(),a.normalize(),r.normalize();let h,u=0;return h=Math.abs(e.dot(s))-o,h>0&&(u+=h*h),h=Math.abs(e.dot(a))-i,h>0&&(u+=h*h),h=Math.abs(e.dot(r))-c,h>0&&(u+=h*h),u}computePlaneDistances(t,e,n=[-0,-0]){let s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const r=this.center,o=this.halfAxes,i=o.getColumn(0,x),c=o.getColumn(1,M),h=o.getColumn(2,g),u=b.copy(i).add(c).add(h).add(r),l=I.copy(u).subtract(t);let m=e.dot(l);return s=Math.min(m,s),a=Math.max(m,a),u.copy(r).add(i).add(c).subtract(h),l.copy(u).subtract(t),m=e.dot(l),s=Math.min(m,s),a=Math.max(m,a),u.copy(r).add(i).subtract(c).add(h),l.copy(u).subtract(t),m=e.dot(l),s=Math.min(m,s),a=Math.max(m,a),u.copy(r).add(i).subtract(c).subtract(h),l.copy(u).subtract(t),m=e.dot(l),s=Math.min(m,s),a=Math.max(m,a),r.copy(u).subtract(i).add(c).add(h),l.copy(u).subtract(t),m=e.dot(l),s=Math.min(m,s),a=Math.max(m,a),r.copy(u).subtract(i).add(c).subtract(h),l.copy(u).subtract(t),m=e.dot(l),s=Math.min(m,s),a=Math.max(m,a),r.copy(u).subtract(i).subtract(c).add(h),l.copy(u).subtract(t),m=e.dot(l),s=Math.min(m,s),a=Math.max(m,a),r.copy(u).subtract(i).subtract(c).subtract(h),l.copy(u).subtract(t),m=e.dot(l),s=Math.min(m,s),a=Math.max(m,a),n[0]=s,n[1]=a,n}transform(t){this.center.transformAsPoint(t);const e=this.halfAxes.getColumn(0,x);e.transformAsPoint(t);const n=this.halfAxes.getColumn(1,M);n.transformAsPoint(t);const s=this.halfAxes.getColumn(2,g);return s.transformAsPoint(t),this.halfAxes=new y.Z([...e,...n,...s]),this}getTransform(){throw new Error("not implemented")}}var T=n(50394),_=n(14034);const D=new i.Z,v=new i.Z;class V{constructor(t=[0,0,1],e=0){(0,o.Z)(this,"normal",void 0),(0,o.Z)(this,"distance",void 0),this.normal=new i.Z,this.distance=-0,this.fromNormalDistance(t,e)}fromNormalDistance(t,e){return(0,T.Z)(Number.isFinite(e)),this.normal.from(t).normalize(),this.distance=e,this}fromPointNormal(t,e){t=D.from(t),this.normal.from(e).normalize();const n=-this.normal.dot(t);return this.distance=n,this}fromCoefficients(t,e,n,s){return this.normal.set(t,e,n),(0,T.Z)((0,_.fS)(this.normal.len(),1)),this.distance=s,this}clone(){return new V(this.normal,this.distance)}equals(t){return(0,_.fS)(this.distance,t.distance)&&(0,_.fS)(this.normal,t.normal)}getPointDistance(t){return this.normal.dot(t)+this.distance}transform(t){const e=v.copy(this.normal).transformAsVector(t).normalize(),n=this.normal.scale(-this.distance).transform(t);return this.fromPointNormal(n,e)}projectPointOntoPlane(t,e=[0,0,0]){t=D.from(t);const n=this.getPointDistance(t),s=v.copy(this.normal).scale(n);return t.subtract(s).to(e)}}const B=[new i.Z([1,0,0]),new i.Z([0,1,0]),new i.Z([0,0,1])],R=new i.Z,U=new i.Z;new V(new i.Z(1,0,0),0);class K{constructor(t=[]){(0,o.Z)(this,"planes",void 0),this.planes=t}fromBoundingSphere(t){this.planes.length=2*B.length;const e=t.center,n=t.radius;let s=0;for(const a of B){let t=this.planes[s],r=this.planes[s+1];t||(t=this.planes[s]=new V),r||(r=this.planes[s+1]=new V);const o=R.copy(a).scale(-n).add(e);a.dot(o);t.fromPointNormal(o,a);const i=R.copy(a).scale(n).add(e),c=U.copy(a).negate();c.dot(i);r.fromPointNormal(i,c),s+=2}return this}computeVisibility(t){let e=r;for(const n of this.planes){switch(t.intersectPlane(n)){case s:return s;case a:e=a}}return e}computeVisibilityWithPlaneMask(t,e){if((0,T.Z)(Number.isFinite(e),"parentPlaneMask is required."),e===K.MASK_OUTSIDE||e===K.MASK_INSIDE)return e;let n=K.MASK_INSIDE;const r=this.planes;for(let o=0;o<this.planes.length;++o){const i=o<31?1<<o:0;if(o<31&&0==(e&i))continue;const c=r[o],h=t.intersectPlane(c);if(h===s)return K.MASK_OUTSIDE;h===a&&(n|=i)}return n}}(0,o.Z)(K,"MASK_OUTSIDE",4294967295),(0,o.Z)(K,"MASK_INSIDE",0),(0,o.Z)(K,"MASK_INDETERMINATE",2147483647);new i.Z,new i.Z,new i.Z,new i.Z,new i.Z;const X=new i.Z,F=new i.Z,k=new i.Z,j=new i.Z,Q=new i.Z,W=new i.Z,Y=new i.Z,G=new i.Z,H=new i.Z,J=new i.Z,$=new i.Z,tt=new i.Z;Math.PI;function et(t,e=new f){if(!t||0===t.length)return e.fromCenterRadius([0,0,0],0);const n=Y.copy(t[0]),s=X.copy(n),a=F.copy(n),r=k.copy(n),o=j.copy(n),i=Q.copy(n),c=W.copy(n);for(const f of t){n.copy(f);const t=n.x,e=n.y,h=n.z;t<s.x&&s.copy(n),t>o.x&&o.copy(n),e<a.y&&a.copy(n),e>i.y&&i.copy(n),h<r.z&&r.copy(n),h>c.z&&c.copy(n)}const h=G.copy(o).subtract(s).magnitudeSquared(),u=G.copy(i).subtract(a).magnitudeSquared(),l=G.copy(c).subtract(r).magnitudeSquared();let m=s,d=o,y=h;u>y&&(y=u,m=a,d=i),l>y&&(y=l,m=r,d=c);const Z=H;Z.x=.5*(m.x+d.x),Z.y=.5*(m.y+d.y),Z.z=.5*(m.z+d.z);let w=G.copy(d).subtract(Z).magnitudeSquared(),p=Math.sqrt(w);const x=J;x.x=s.x,x.y=a.y,x.z=r.z;const M=$;M.x=o.x,M.y=i.y,M.z=c.z;const g=tt.copy(x).add(M).multiplyByScalar(.5);let b=0;for(const f of t){n.copy(f);const t=G.copy(n).subtract(g).magnitude();t>b&&(b=t);const e=G.copy(n).subtract(Z).magnitudeSquared();if(e>w){const t=Math.sqrt(e);p=.5*(p+t),w=p*p;const s=t-p;Z.x=(p*Z.x+s*n.x)/t,Z.y=(p*Z.y+s*n.y)/t,Z.z=(p*Z.z+s*n.z)/t}}return p<b?(Z.to(e.center),e.radius=p):(g.to(e.center),e.radius=b),e}var nt=n(79057);const st=new y.Z,at=new y.Z,rt=new y.Z,ot=new y.Z,it=new y.Z;function ct(t,e={}){const n=nt.Z.EPSILON20;let s=0,a=0;const r=at,o=rt;r.identity(),o.copy(t);const i=n*function(t){let e=0;for(let n=0;n<9;++n){const s=t[n];e+=s*s}return Math.sqrt(e)}(o);for(;a<10&&lt(o)>i;)mt(o,ot),it.copy(ot).transpose(),o.multiplyRight(ot),o.multiplyLeft(it),r.multiplyRight(ot),++s>2&&(++a,s=0);return e.unitary=r.toTarget(e.unitary),e.diagonal=o.toTarget(e.diagonal),e}const ht=[1,0,0],ut=[2,2,1];function lt(t){let e=0;for(let n=0;n<3;++n){const s=t[st.getElementIndex(ut[n],ht[n])];e+=2*s*s}return Math.sqrt(e)}function mt(t,e){const n=nt.Z.EPSILON15;let s=0,a=1;for(let h=0;h<3;++h){const e=Math.abs(t[st.getElementIndex(ut[h],ht[h])]);e>s&&(a=h,s=e)}const r=ht[a],o=ut[a];let i=1,c=0;if(Math.abs(t[st.getElementIndex(o,r)])>n){const e=(t[st.getElementIndex(o,o)]-t[st.getElementIndex(r,r)])/2/t[st.getElementIndex(o,r)];let n;n=e<0?-1/(-e+Math.sqrt(1+e*e)):1/(e+Math.sqrt(1+e*e)),i=1/Math.sqrt(1+n*n),c=n*i}return y.Z.IDENTITY.to(e),e[st.getElementIndex(r,r)]=e[st.getElementIndex(o,o)]=i,e[st.getElementIndex(o,r)]=c,e[st.getElementIndex(r,o)]=-c,e}const dt=new i.Z,ft=new i.Z,yt=new i.Z,Zt=new i.Z,wt=new i.Z,pt=new y.Z,xt={diagonal:new y.Z,unitary:new y.Z};function Mt(t,e=new L){if(!t||0===t.length)return e.halfAxes=new y.Z([0,0,0,0,0,0,0,0,0]),e.center=new i.Z,e;const n=t.length,s=new i.Z(0,0,0);for(const i of t)s.add(i);const a=1/n;s.multiplyByScalar(a);let r=0,o=0,c=0,h=0,u=0,l=0;for(const i of t){const t=dt.copy(i).subtract(s);r+=t.x*t.x,o+=t.x*t.y,c+=t.x*t.z,h+=t.y*t.y,u+=t.y*t.z,l+=t.z*t.z}r*=a,o*=a,c*=a,h*=a,u*=a,l*=a;const m=pt;m[0]=r,m[1]=o,m[2]=c,m[3]=o,m[4]=h,m[5]=u,m[6]=c,m[7]=u,m[8]=l;const{unitary:d}=ct(m,xt),f=e.halfAxes.copy(d);let Z=f.getColumn(0,yt),w=f.getColumn(1,Zt),p=f.getColumn(2,wt),x=-Number.MAX_VALUE,M=-Number.MAX_VALUE,g=-Number.MAX_VALUE,b=Number.MAX_VALUE,I=Number.MAX_VALUE,S=Number.MAX_VALUE;for(const i of t)dt.copy(i),x=Math.max(dt.dot(Z),x),M=Math.max(dt.dot(w),M),g=Math.max(dt.dot(p),g),b=Math.min(dt.dot(Z),b),I=Math.min(dt.dot(w),I),S=Math.min(dt.dot(p),S);Z=Z.multiplyByScalar(.5*(b+x)),w=w.multiplyByScalar(.5*(I+M)),p=p.multiplyByScalar(.5*(S+g)),e.center.copy(Z).add(w).add(p);const E=ft.set(x-b,M-I,g-S).multiplyByScalar(.5),P=new y.Z([E[0],0,0,0,E[1],0,0,0,E[2]]);return e.halfAxes.multiplyRight(P),e}}}]);