import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-tut/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | general-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GeneralComponent />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <GeneralComponent>
        template block text
      </GeneralComponent>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
