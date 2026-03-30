import { vaultItems } from '../data/vaultItems'
import './Vault.css'

function VaultItem({ item }) {
  const Tag = item.link ? 'a' : 'div'
  const props = item.link
    ? {
        href: item.link,
        target: item.external ? '_blank' : undefined,
        rel: item.external ? 'noopener noreferrer' : undefined,
      }
    : {}

  return (
    <Tag className="vault-item" {...props}>
      <h3 className="vault-item__title">
        {item.title}
        {item.external && <span className="vault-item__arrow" aria-hidden="true"> &#8599;</span>}
      </h3>
      <p className="vault-item__desc">{item.description}</p>
    </Tag>
  )
}

function Vault() {
  const pinned = vaultItems.filter((item) => item.pinned)
  const rest = vaultItems.filter((item) => !item.pinned)

  return (
    <div className="vault">
      <header className="vault__header">
        <h1 className="vault__title">Vault</h1>
        <p className="vault__desc">All the work — pinned favorites and everything else.</p>
      </header>

      {pinned.length > 0 && (
        <section className="vault__section">
          <h2 className="section-label">Pinned</h2>
          <div className="vault__grid">
            {pinned.map((item) => (
              <VaultItem key={item.title} item={item} />
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="vault__section">
          <h2 className="section-label">Everything Else</h2>
          <div className="vault__list">
            {rest.map((item) => (
              <VaultItem key={item.title} item={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default Vault
