import React,{useState} from 'react'
import classes from "./Product.module.css"
const ProductDescription = () => {
    const [description, setDescription] = useState("description");
  return (
    <div className={classes["product-contents"]}>
        <div className={classes["product-content"]}>
          <h2 onClick={() => setDescription("description")}>Description</h2>
          <h2 onClick={() => setDescription("info")}>Additional information</h2>
          <h2 onClick={() => setDescription("delivery")}>Delivery & Returns</h2>
          <hr />
        </div>
        {description === "delivery" && (
          <table>
            <tr>
              <th>DELIVERY SERVICE</th>
              <th>DESCRIPTION</th>
              <th>PLEASE NOTE </th>
              <th>PRICE</th>
            </tr>
            <tr>
              <td>Standard</td>
              <td>Within 3-4 working days (07:00 - 19:30hrs)</td>
              <td>Weekdays Only (only applies to orders placed before 6pm)</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Express Delivery </td>
              <td>Next Working Day (08:00 - 18:00hrs)</td>
              <td>
                Weekdays Only, applies to orders placed before 4pm Mon-Thurs,
                before 3pm on Fri & before 2pm on Sat (no Sunday deliveries)
              </td>
              <td>99</td>
            </tr>
            <tr>
              <td>Premium Delivery - DPD </td>
              <td>Next Working Day (07:00 - 19:30hrs)</td>
              <td>
                Weekdays Only, applies to orders placed before 4pm
                Monday-Thursday. (Orders placed after 4pm Thur - Sunday before
                1pm, will be delivered Monday)
              </td>
              <td>149</td>
            </tr>
            <tr>
              <td>Large Parcel Delivery</td>
              <td>Within 3-5 working days (07:00 - 19:30hrs)</td>
              <td>Weekdays Only (only applies to orders placed before 6pm)</td>
              <td>199</td>
            </tr>
            <tr>
              <td>Premium Saturday Delivery </td>
              <td>Saturday Delivery (07:00 - 19:30hrs)</td>
              <td>
                Delivered Saturday with a 1 Hour delivery slot and Tracking.
                (only applies to orders placed on Friday before 2pm)
              </td>
              <td>129</td>
            </tr>
            <tr>
              <td>Premium Sunday Delivery </td>
              <td>Sunday Delivery (07:00 - 19:30hrs)</td>
              <td>
                Delivered Sunday with a 1 Hour delivery slot and Tracking. (only
                applies to orders placed on Friday before 2pm)
              </td>
              <td>99</td>
            </tr>
          </table>
        )}
        {description === "description" && (
          <div>
            <p>
              These gold-plated hoops are sure to add a touch of glamour to your
              evening look. Designed to hug the ears, they’re a sure snug fit,
              finished with pretty pearls swinging off the base. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Non-refundable.
            </p>
            <li> Outer: 70% Brass,30% Pearl</li>
            <li>wipe clean</li>
            <li>L 1 cm</li>
            <li>Plain</li>
          </div>
        )}
        {description === "info" && (
          <table>
            <tr>
              <td>Color</td>
              <td>Black, Brown, Cream, Gold, Green, Pink, Purple, Silver</td>
            </tr>
            <tr>
              <td>GEMSTONES</td>
              <td>Diamonds, No Gemstones</td>
            </tr>
            <tr>
              <td>MATERIALS</td>
              <td>Gold, Steel, Sterling Silver, Titanium, White Gold</td>
            </tr>
            <tr>
              <td>STYLE</td>
              <td>
                90's Flashback, Cocktail, Engagement, Fashion, Party, Super
                Classics
              </td>
            </tr>
          </table>
        )}
      </div>
  )
}

export default ProductDescription