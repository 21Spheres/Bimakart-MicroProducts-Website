export function PolicyInfo() {
  return (
    <div className="text-white pr-6">
      {/* Title */}
      <h2 className="text-[26px] font-semibold mb-4">Kartavya Policy</h2>

      {/* Paragraph 1 */}
      <p className="text-sm leading-relaxed text-gray-300 mb-4">
        Kartavya Policy is a comprehensive insurance solution designed to
        safeguard your entire workforce, including employees and workers under a
        single, unified plan. It is ideal for businesses operating in
        field-based or risk-prone environments.
      </p>

      {/* Paragraph 2 */}
      <p className="text-sm leading-relaxed text-gray-300 mb-6">
        The policy provides coverage against workplace accidents, medical
        expenses, hospitalization, disability, and death benefits, ensuring both
        legal compliance and peace of mind. By choosing Kartavya Policy,
        organizations demonstrate responsibility, care, and commitment toward
        worker safety and well-being.
      </p>

      {/* Coverage heading */}
      <h4 className="text-sm font-semibold mb-3">Coverage includes:</h4>

      {/* Coverage list */}
      <ul className="space-y-2 text-sm text-gray-200">
        <li className="flex items-start gap-2">
          <span className="text-brand-orange">✔</span>
          Workplace Accident Protection
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-orange">✔</span>
          Medical &amp; Hospitalization Expenses
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-orange">✔</span>
          Disability &amp; Death Benefits
        </li>
        <li className="flex items-start gap-2">
          <span className="text-brand-orange">✔</span>
          Covers Employees &amp; Workers Together
        </li>
      </ul>

      {/* WhatsApp button */}
      <button className="mt-8 inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover px-4 py-2 rounded-md text-sm font-medium">
        Chat on Whatsapp
      </button>
    </div>
  );
}
