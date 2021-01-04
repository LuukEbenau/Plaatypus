import React from "react"
import christine_feut from "../../images/fotos/personen/christine de feut.jpg"
export default function Page() {
  return (
    <div>
      <div className="profile-block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis mauris tellus, mattis ultricies lorem imperdiet in. Nullam gravida ac erat in hendrerit. Proin pretium, tellus non sodales convallis, neque nisi fermentum urna, id vestibulum purus orci fringilla elit. Donec sit amet libero dolor. In hac habitasse platea dictumst. In ornare vel ipsum in fringilla. Duis feugiat maximus lectus, et tempus arcu hendrerit id. Cras vestibulum, nibh eget commodo maximus, ante felis tristique enim, commodo rhoncus ex massa nec urna.
      </div>
      <img className="profile-img" src={christine_feut}/>
    </div>

  );
}