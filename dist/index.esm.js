function e(e){switch(typeof e){case"string":return""!==e.trim();case"number":return!isNaN(e)&&isFinite(e);case"object":return null!==e&&Object.keys(e).length>0;default:return!!e}}export{e as default};
