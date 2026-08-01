function SubscriptionHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-bold [color:var(--color-text-primary)]">
          Subscription Management
        </h1>

        <p className="[color:var(--color-text-muted)] mt-2">
          Manage your subscription and billing history.
        </p>

      </div>

    </div>
  );
}

export default SubscriptionHeader;
