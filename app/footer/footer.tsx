import Image from 'next/image'
import styles from './footer.module.scss'

export default function Footer() {

  return (

    <footer className={styles.main}>
      <div className={styles.css_test}>
        <h2 className="ac-gf-label" id="ac-gf-label">Apple Footer</h2>
        <section className={styles.footnotes} aria-label="Footnotes">
          <ol>
            <li id="footnote-1">
              1. $6.99/month after free trial. Only one offer per Apple&nbsp;ID and only one offer per family if you’re part of a Family&nbsp;Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple&nbsp;TV+ one year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="/promo/">terms</a> apply.</li>
            <li id="footnote-2"> 2. One subscription per Family&nbsp;Sharing group. Plan automatically renews until cancelled.</li>
            <li id="footnote-3">3. The Apple&nbsp;One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.</li>
            <li id="footnote-4">4. Limited-time offer; offer may end at any time. Free Apple&nbsp;TV+ access for students ends when you no longer qualify or do not renew your Apple&nbsp;Music Student subscription. Offer good for verified college students only and does not extend to a Family&nbsp;Sharing group.</li>
          </ol>
          <ul>
            <li><span className="mlb-legal">5. Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.</span></li>
          </ul>
        </section>

        <nav className={styles.ft_breadcrumbs} role="navigation">
          <a href="/" className={styles.apple}>
            <span aria-hidden="true"></span>
            <span>Apple</span>
            <span></span>
            <span></span>
          </a>
          <div>
            <ol vocab="http://schema.org/" typeof="BreadcrumbList">
              <li property="itemListElement" typeof="ListItem">
                <a href="/services/" property="item" typeof="WebPage"><span property="name">Only on Apple</span></a>
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">Apple&nbsp;TV+</span>
              </li>
            </ol>
          </div>
        </nav>

        <nav className={styles.navigation} aria-label="Apple Directory" role="navigation">
          <div className={styles.suv_navigation}>
            <div>
              <h3 aria-expanded="true">
                <span>Shop and Learn</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li><a href="/us/shop/goto/store" data-analytics-title="store">Store</a></li>
                <li ><a href="/mac/" data-analytics-title="mac">Mac</a></li>
                <li ><a href="/ipad/" data-analytics-title="ipad">iPad</a></li>
                <li ><a href="/iphone/" data-analytics-title="iphone">iPhone</a></li>
                <li ><a href="/watch/" data-analytics-title="watch">Watch</a></li>
                <li ><a href="/airpods/" data-analytics-title="airpods">AirPods</a></li>
                <li ><a href="/tv-home/" data-analytics-title="tv and home">TV &amp; Home</a></li>
                <li ><a href="/airtag/" data-analytics-title="airtag">AirTag</a></li>
                <li ><a href="/us/shop/goto/buy_accessories" data-analytics-title="accessories">Accessories</a></li>
                <li ><a href="/us/shop/goto/giftcards" data-analytics-title="gift cards">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3>
                <span>Apple Wallet</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li ><a href="/wallet/" data-analytics-title="wallet">Wallet</a></li>
                <li ><a href="/apple-card/" data-analytics-title="apple card">Apple&nbsp;Card</a></li>
                <li ><a href="/apple-pay/" data-analytics-title="apple pay">Apple&nbsp;Pay</a></li>
                <li ><a href="/apple-cash/" data-analytics-title="apple cash">Apple&nbsp;Cash</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.suv_navigation} >
            <div>
              <h3>
                <span>Account</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li ><a href="https://appleid.apple.com/us/" data-analytics-title="manage your apple id" data-analytics-exit-link="">Manage Your Apple&nbsp;ID</a></li>
                <li ><a href="/us/shop/goto/account" data-analytics-title="apple store account">Apple Store Account</a></li>
                <li ><a href="https://www.icloud.com" data-analytics-title="icloud.com" data-analytics-exit-link="">iCloud.com</a></li>
              </ul>
            </div>
            <div>
              <h3>
                <span>Entertainment</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li ><a href="/apple-one/" data-analytics-title="apple one">Apple&nbsp;One</a></li>
                <li ><a href="/apple-tv-plus/" data-analytics-title="apple tv plus">Apple&nbsp;TV+</a></li>
                <li ><a href="/apple-music/" data-analytics-title="apple music">Apple&nbsp;Music</a></li>
                <li ><a href="/apple-arcade/" data-analytics-title="apple arcade">Apple&nbsp;Arcade</a></li>
                <li ><a href="/apple-fitness-plus/" data-analytics-title="apple fitness plus">Apple&nbsp;Fitness+</a></li>
                <li ><a href="/apple-news/" data-analytics-title="apple news plus">Apple&nbsp;News+</a></li>
                <li ><a href="/apple-podcasts/" data-analytics-title="apple podcasts">Apple Podcasts</a></li>
                <li ><a href="/apple-books/" data-analytics-title="apple books">Apple&nbsp;Books</a></li>
                <li ><a href="/app-store/" data-analytics-title="app store">App&nbsp;Store</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.suv_navigation} >
            <div>
              <h3>
                <span>Apple Store</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li ><a href="/retail/" data-analytics-title="find a store">Find a Store</a></li>
                <li ><a href="/retail/geniusbar/" data-analytics-title="genius bar">Genius Bar</a></li>
                <li ><a href="/today/" data-analytics-title="today at apple">Today at Apple</a></li>
                <li ><a href="/today/camp/" data-analytics-title="apple camp">Apple Camp</a></li>
                <li ><a href="https://apps.apple.com/us/app/apple-store/id375380948" data-analytics-title="apple store app" data-analytics-exit-link="">Apple Store App</a></li>
                <li ><a href="/us/shop/goto/special_deals" data-analytics-title="certified refurbished">Certified Refurbished</a></li>
                <li ><a href="/us/shop/goto/trade_in" data-analytics-title="apple trade in">Apple&nbsp;Trade&nbsp;In</a></li>
                <li ><a href="/us/shop/goto/payment_plan" data-analytics-title="financing">Financing</a></li>
                <li ><a href="/us/shop/goto/buy_iphone/carrier_offers" data-analytics-title="carrier deals at apple">Carrier Deals at Apple</a></li>
                <li ><a href="/us/shop/goto/order/list" data-analytics-title="order status">Order Status</a></li>
                <li ><a href="/us/shop/goto/help" data-analytics-title="shopping help">Shopping Help</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.suv_navigation} >
            <div>
              <h3>
                <span>For Business</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li ><a href="/business/" data-analytics-title="apple and business">Apple and Business</a></li>
                <li ><a href="/retail/business/" data-analytics-title="shop for business">Shop for Business</a></li>
              </ul>
            </div>
            <div>
              <h3>
                <span>For Education</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li ><a href="/education/" data-analytics-title="apple and education">Apple and Education</a></li>
                <li ><a href="/education/k12/how-to-buy/" data-analytics-title="shop for k12">Shop for K-12</a></li>
                <li ><a href="/us/shop/goto/educationrouting" data-analytics-title="shop for college">Shop for College</a></li>
              </ul>
            </div>
            <div>
              <h3>
                <span>For Healthcare</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li ><a href="/healthcare/" data-analytics-title="apple in healthcare">Apple in Healthcare</a></li>
                <li ><a href="/healthcare/apple-watch/" data-analytics-title="health on apple watch">Health on Apple&nbsp;Watch</a></li>
                <li ><a href="/healthcare/health-records/" data-analytics-title="health records on iphone">Health Records on iPhone</a></li>
              </ul>
            </div>
            <div>
              <h3>
                <span>For Government</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li ><a href="/r/store/government/" data-analytics-title="shop for government">Shop for Government</a></li>
                <li ><a href="/us/shop/goto/eppstore/veteransandmilitary" data-analytics-title="shop for veterans and military">Shop for Veterans and Military</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.suv_navigation} >
            <div>
              <h3>
                <span>Apple Values</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li ><a href="/accessibility/" data-analytics-title="accessibility">Accessibility</a></li>
                <li ><a href="/education-initiative/" data-analytics-title="education">Education</a></li>
                <li ><a href="/environment/" data-analytics-title="environment">Environment</a></li>
                <li ><a href="/diversity/" data-analytics-title="inclusion and diversity">Inclusion and Diversity</a></li>
                <li ><a href="/privacy/" data-analytics-title="privacy">Privacy</a></li>
                <li ><a href="/racial-equity-justice-initiative/" data-analytics-title="racial equity and justice">Racial Equity and Justice</a></li>
                <li ><a href="/supplier-responsibility/" data-analytics-title="supplier responsibility">Supplier Responsibility</a></li>
              </ul>
            </div>
            <div>
              <h3>
                <span>About Apple</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </h3>
              <ul>
                <li ><a href="/newsroom/" data-analytics-title="newsroom">Newsroom</a></li>
                <li ><a href="/leadership/" data-analytics-title="apple leadership">Apple Leadership</a></li>
                <li ><a href="/careers/us/" data-analytics-title="career opportunities">Career Opportunities</a></li>
                <li ><a href="https://investor.apple.com/" data-analytics-title="investors" data-analytics-exit-link="">Investors</a></li>
                <li ><a href="/compliance/" data-analytics-title="ethics and compliance">Ethics &amp; Compliance</a></li>
                <li ><a href="/apple-events/" data-analytics-title="events">Events</a></li>
                <li ><a href="/contact/" data-analytics-title="contact apple">Contact Apple</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <section className={styles.df_footer}>
        <div className={styles.shop}>
          More ways to shop: <a href="/retail/" data-analytics-title="find an apple store">Find an Apple Store</a> or <a href="https://locate.apple.com/" data-analytics-title="other retailers or resellers" data-analytics-exit-link="">other retailer</a> near you. <span>Or call 1-800-MY-APPLE.</span>
        </div>
        <div className={styles.local}>
          <a className={styles.u_state} href="/choose-country-region/" title="Choose your country or region" aria-label="United States. Choose your country or region" data-analytics-title="choose your country">United States</a>
        </div>
        <div className={styles.legal}>
          <div>Copyright ©

            2023
            Apple Inc. All rights reserved.
          </div>
          <ul role="list">
            <li role="listitem">
              <a href="/legal/privacy/" data-analytics-title="privacy policy">Privacy Policy</a>
            </li>
            <li role="listitem">
              <a href="/legal/internet-services/terms/site.html" data-analytics-title="terms of use">Terms of Use</a>
            </li>
            <li role="listitem">
              <a href="/us/shop/goto/help/sales_refunds" data-analytics-title="sales and refunds">Sales and Refunds</a>
            </li>
            <li role="listitem">
              <a href="/legal/" data-analytics-title="legal">Legal</a>
            </li>
            <li role="listitem">
              <a href="/sitemap/" data-analytics-title="site map">Site Map</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
