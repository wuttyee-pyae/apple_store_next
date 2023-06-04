import Image from 'next/image'
import styles from './page.module.css'
import homeImg from './images/home.png';
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.image_container}>
        <Image src={homeImg}  className={styles.image}
        width={500}
        height={500} alt='image'/>
      </div>
      <section>
        <div>
          <div>
            <div>
              <div>
                <h3><span></span></h3>
                <p></p>
                <p>The&nbsp;Apple&nbsp;Music Student <br />Plan comes with <br />Apple&nbsp;TV+ for&nbsp;free.<sup><a href="#footnote-4" aria-label="Footnote 4">4</a></sup></p>
                <a href="https://music.apple.com/deeplink?app=music&amp;p=subscribe-student?itscg=10000&amp;itsct=mus-0-tv_ovp-try_mus-apl-200310" aria-label="Try apple music free" data-analytics-title="try apple music free" data-analytics-exit-link="" data-rid-relay="{&quot;286&quot;:&quot;itsct&quot;}">Try Apple Music free</a>
              </div>
              <div >
                <figure>
                  <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/student_plan__bm7yp0v4tf6u_medium_2x.jpg" alt="Image description" />
                  <figcaption>Caption for the image</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div>
            <div data-analytics-section-engagement="name:apple tv 4k">
              <figure>
              <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_4k_remote__igmcbznr1w2u_medium_2x.jpg" alt="Image description" />
                  <figcaption>Caption for the image</figcaption>
              </figure>
              <div>
                <h3><span>Apple&nbsp;TV&nbsp;4K</span></h3>
                <p>The Apple experience.<br />Cinematic in every&nbsp;sense.</p>
                <div>
                  <ul>
                    <li>
                      <a href="/us/shop/goto/buy_tv/apple_tv_4k" data-analytics-title="buy - apple tv 4k" aria-label="Buy Apple TV 4K" ><span >Buy</span></a> </li>
                    <li>
                      <a href="/apple-tv-4k/" data-analytics-title="learn more about apple tv 4k" aria-label="Learn more about Apple TV 4K" data-rid-store="{&quot;289&quot;:&quot;atv-0-tvapp_ovp-tle_lrn-apl-avl-191111&quot;}"><span >Learn more</span><span ></span></a> </li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-analytics-section-engagement="name:airplay">
              <figure >
              <img src=" https://www.apple.com/v/apple-tv-plus/ag/images/overview/air_play__dyuvvwnd5riq_medium_2x.jpg" alt="Image description" />
                  <figcaption>Caption for the image</figcaption>
              </figure>
              <div >
                <h3 >AirPlay</h3>
                <p >Bring Apple&nbsp;TV+ to <br />a screen near you.</p>
                <a href="/airplay/" data-analytics-title="learn more about airplay" aria-label="learn more about airplay"><span >Learn more</span><span ></span></a> </div>
            </div>
          </div>
        </div>
      </section>
    </main>
 
  )
}
