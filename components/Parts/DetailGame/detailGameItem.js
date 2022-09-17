import React from "react";

// V1
// export default function DetailGameItem({ data }) {
//   // API Image
//   const API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;

//   return (
//     <div className="row align-items-center">
//       {data.map((item, i) => (
//         <>
//           <div className="col-md-12 col-4">
//             <img src={`${API_IMAGE}/cover-games/${item.coverGames}`} width="280" height="380" className="img-fluid" alt="cover-game" />
//           </div>

//           {/* Mobile: Game title */}
//           <div className="col-md-12 col-8 d-md-none d-block">
//             <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{item.gameName}</h2>
//             <p className="text-sm color-palette-2 text-start mb-0">Category: {item.category.name}</p>
//           </div>

//           {/* Desktop: Game title */}
//           <div className="pb-50 pt-10 d-md-block d-none">
//             <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">{item.gameName}</h2>
//             <p className="text-lg color-palette-2 mb-0">Category: {item.category.name}</p>
//           </div>
//         </>
//       ))}
//     </div>
//   );
// }

// V2
export default function DetailGameItem({ key, urlImage, gameName, category }) {
  return (
    <div key={key} className="row align-items-center">
      <div className="col-md-12 col-4">
        <img src={urlImage} width="280" height="380" className="img-fluid" alt="cover-game" />
      </div>

      {/* Mobile: Game title */}
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{gameName}</h2>
        <p className="text-sm color-palette-2 text-start mb-0">Category: {category}</p>
      </div>

      {/* Desktop: Game title */}
      <div className="pb-50 pt-10 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">{gameName}</h2>
        <p className="text-lg color-palette-2 mb-0">Category: {category}</p>
      </div>
    </div>
  );
}
