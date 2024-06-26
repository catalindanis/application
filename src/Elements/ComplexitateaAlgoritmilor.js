import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/complexitate/Screenshot_1.png"
import img2 from "../Resources/Images/grile_interesante/complexitate/2.png"

function ComplexitateaAlgoritmilor() {
  return (
    <div className="Card">
      <Title text="Proprietăți interesante - Complexitate"></Title>
      <Description text="-suma de pași 1 + 1/2 + 1/3 + 1/4 + ... + 1/n = logn (demonstrație matematică, nu are rost)
-suma de pași 1 + 1/2 + 1/4 + ... = 2 (se poate demonstra cu limita de la suma asta calculată cu ajutorul progresiei geometrice)
-clasele de complexități permit niște aproximări trase puțin de coadă cum sunt cele de mai jos:
O(n!) = O(n^n)"></Description>
      <Title text="Grile interesante - Complexitate"></Title>
      <img src={img1} className="mb-2" id="image75"></img>
      <Description text="-se foloseste proprietatea care spune că 1 + 1/2 + 1/3 + 1/4 + ... + 1/n = logn"></Description>
      <img src={img2} className="mb-2" id="image75"></img>
      <Description text="-se numără pașii și se observă formula"></Description>
      <h6 className="mt-4">
        Unele grile sunt preluate din simulări de pe zecelaexamene.ro
      </h6>
    </div>
  );
}

export default ComplexitateaAlgoritmilor;
