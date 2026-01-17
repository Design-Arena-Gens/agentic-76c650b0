import Head from 'next/head';
import styles from '@/styles/Home.module.css';

const scriptBeats = [
  {
    label: '0-2 ثانية · الهوك',
    text: 'وقفي لحظة! إذا شفتي هاللمعة الباردة بعينه مع شبه ابتسامة مقلوبة، انتِ قدام نرجسي رح يحرقلك ثقتك بأسرع مما بتتخيلي.'
  },
  {
    label: '3-10 ثواني · المشكلة',
    text: 'أكتر شكوى بسمعها من البنات: "بحس حالي الغلطانة ومتل العاجزة قدامه"، لأنه بكل حركة عم يزرع شعور التقصير جواتك.'
  },
  {
    label: '11-20 ثانية · الدلالات الوجهية',
    text: 'راقبي: حواجب مرفوعة طرف واحد بشكل إستعلائي، فك سفلي مشدود وكأنو عم يعض على أي نقد، وعينه بتزغلل يمين ويسار وهو عم يحكي عن حاله، كلو بيصرخ أنا وبس.'
  },
  {
    label: '21-28 ثانية · التحذير',
    text: 'لما يمدحك وبنفس الجملة يغزك، هاد تلاعب. توقفي واعملي مسافة أمان قبل ما يشفط طاقتك.'
  },
  {
    label: '29-30 ثانية · الحل السريع',
    text: 'صورتلك الخريطة: ثبّتي حدودك، سجلي السلوك، واستعيني بجلسة تحليل مفصلة لتعرفي إذا لازم تعطيه فرصة أو تغلقي الباب.'
  }
];

const faceSignals = [
  'حاجب واحد مرفوع لفوق بشكل زاوية حادة كأنو عم يقول أنا فوق الكل.',
  'ابتسامة نص نص، الشفة العليا ثابتة والسفلى مشدودة، دليل كبرياء وزيف بالتعاطف.',
  'اتساع مبالغ فيه بفتحات الأنف لما تحكي عن نجاحك، يعني عم يحضر هجمة تقليل من شأنك.',
  'نظرة ثابتة طويلة بلا رمشة، وبمجرد ما تسكتي بيقطع العين وبيعمل حركة فم مزيفة وكأنو زهقان منك.'
];

const captionText = 'وقفي! إذا عيونُه جامدة وكلامُه سكّر بس بيلسع، فإنتي مع نرجسي رح يطفّي نورك. بهالرّيل شرحت أهم ملامح الغرور السام وكيف تحمي حالك بخطوة عملية. احجزي جلستك التحليلية معي اليوم من اللينك بالبايو وخلي طاقتك إلك مو إلو.';

export default function Home() {
  return (
    <>
      <Head>
        <title>سكريبت ريل عن الشخص النرجسي</title>
        <meta
          name="description"
          content="سكريبت باللهجة السوربة لريل ٣٠ ثانية عن الشخص النرجسي مع الدلالات الوجهية والحل السريع وكابشن جاهز مع CTA."
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <span className={styles.badge}>خبيرة تسويق · علم الفراسة</span>
          <h1 className={styles.title}>سكريبت ريل ٣٠ ثانية باللهجة السوربة عن النرجسي</h1>
          <p className={styles.subtitle}>
            محتوى جاهز للتصوير: هوك تحذيري، مشكلة البنات مع الشخص النرجسي، دلالات بالملامح، حل مختصر، وكابشن بCTA قوي.
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>توزيع السكريبت حسب الثواني</h2>
          <ul className={styles.list}>
            {scriptBeats.map((beat, index) => (
              <li key={beat.label}>
                <span className={styles.bullet}>{index + 1}</span>
                <div>
                  <strong>{beat.label}</strong>
                  <p>{beat.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>أهم الملامح اللي بتفضح النرجسي</h2>
          <ul className={styles.list}>
            {faceSignals.map((signal, index) => (
              <li key={signal}>
                <span className={styles.bullet}>★</span>
                <p>{signal}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>الخطة السريعة للحماية</h2>
          <p>
            ثبّتي صوتك: اسمّي تصرفه بصوت عالي قدامك لتترسخي بالوعي. اكتبي ملاحظاتك بجدول صغير، وادرسي معي بالجلسة التحليلية كيف تتعاملي مع كل نمط من دون ما تتكسري.
          </p>
        </section>

        <div className={styles.captionBox}>
          <h3>الكابشن المقترح + CTA</h3>
          <p className={styles.captionText}>{captionText}</p>
          <span className={styles.cta}>احجزي جلستك الخاصة هلا</span>
        </div>

        <div className={styles.footer}>
          <span>⚡ صوتك مسموع — خليكِ واعية وحددي حدودك.</span>
          <span>صُمم خصيصاً لإخصائية تحليل الشخصيات بعلم الفراسة.</span>
        </div>
      </main>
    </>
  );
}
