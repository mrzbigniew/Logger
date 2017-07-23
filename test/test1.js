/*global logger:false, chai:false, describe:false, it:false, sinon:false, beforeEach:false,afterEach:false*/
/*eslint no-console:0*/
'use-strict';

const expect = chai.expect;
const testMsg = 'test message';

describe('Logger' , () => {
    beforeEach(() => {
        sinon.spy(console , 'log');
        sinon.spy(console , 'error');
        sinon.spy(console , 'warn');
    });

    afterEach(() => {
        console.log.restore();
        console.error.restore();
        console.warn.restore();
    });

    it('is an object' , () => {
        expect(logger).to.be.an('object');
    });

    it('is an object' , () => {
        expect(logger.log).to.be.an('object');
    });

    it('has success method' , () => {
        expect(logger.log.success).to.be.a('function');
    });

    it('has info method' , () => {
        expect(logger.log.info).to.be.a('function');
    });

    it('has error method' , () => {
        expect(logger.log.error).to.be.a('function');
    });

    it('has warning method' , () => {
        expect(logger.log.warning).to.be.a('function');
    });

    it('calls loggel.log.success' , () => {
        logger.log.success(testMsg);

        expect(console.log).to.have.been.calledOnce;
    });

    it('prepends the message with style OK: pharse' , () => {
        logger.log.success(testMsg);

        expect(console.log).to.always.have.been.calledWith('%c OK:' , 'color: green; font-weight: bold;' , testMsg);
    });

    it('calls loggel.log.error' , () => {
        logger.log.error(testMsg);

        expect(console.error).to.have.been.calledOnce;
    });

    it('prepends the message with style Error: pharse' , () => {
        logger.log.error(testMsg);

        expect(console.error).to.always.have.been.calledWith('%c Error:' , 'color: red; font-weight: bold;' , testMsg);
    });

    it('calls loggel.log.warning' , () => {
        logger.log.warning(testMsg);

        expect(console.warn).to.have.been.calledOnce;
    });

    it('prepends the message with style Warning: pharse' , () => {
        logger.log.warning(testMsg);

        expect(console.warn).to.always.have.been.calledWith('%c Warning:' , 'color: yellow; font-weight: bold;' , testMsg);
    });

    it('calls loggel.log.info' , () => {
        logger.log.info(testMsg);

        expect(console.log).to.have.been.calledOnce;
    });

    it('prepends the message with style Info: pharse' , () => {
        logger.log.info(testMsg);

        expect(console.log).to.always.have.been.calledWith('%c Info:' , 'color: blue; font-weight: bold;' , testMsg);
    });
});